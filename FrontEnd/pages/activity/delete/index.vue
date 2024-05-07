<template>
  <section>
      <span class="text-notion">Notion Clone - Mini Project</span>
    <span class="text-notion-nrp pb-16">Update Data</span>
    <form class="form" @submit.prevent="submitForm">
      <div class="Input-Title">
        <input class="input" placeholder="ID Activity" type="text" v-model="_id" />
      </div>
      <button class="submit" type="submit">Hapus Activity</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      _id: "",
    };
  },
  methods: {
    async submitForm() {
      const data = {
        _id: this._id,
      };

      try {
        const response = await fetch(
          `http://localhost:3002/pages/${this._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete activity");
        }

        const responseData = await response.json();
        alert("Delete Activity successfully!");
        console.log("Success:", responseData);
        this.$router.push({ path: "/activity" });
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to delete activity, please try again.");
      }
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  background: linear-gradient(to bottom, #0077be, #3b8df2);
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: form-animation 0.5s ease-in-out;
}

@keyframes form-animation {
  from {
    transform: rotateX(-30deg);
    opacity: 0;
  }

  to {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

.input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: transparent;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  color: rgb(255, 255, 255);
  border: 2px solid #3b8df2;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.input::placeholder {
  color: #fff;
}

.input:hover,
.input:focus {
  border-color: #3b8df2;
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05) rotateY(20deg);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  outline: none;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3b8df2;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

button:hover {
  background-color: #0077be;
  font-size: 17px;
  transform: scale(1.05) rotateY(20deg) rotateX(10deg);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>
