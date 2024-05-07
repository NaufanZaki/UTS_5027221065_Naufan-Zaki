<template>
  <div>
    <section class="w-full flex flex-col justify-center h-[200px] gap-5">
      <span class="text-notion">Notion Clone - Mini Project</span>
      <span class="text-notion-nrp">Naufan Zaki - 5027221065</span>
      <div class="flex gap-3">
        <input
          class="search"
          type="search"
          v-model="searchTerm"
          placeholder="Cari Kegiatan"
        />
      </div>
      <div class="flex gap-3 flex-wrap justify-center">
        <button class="activity" @click="toggleActivityView">Tambah Kegiatan</button>
        <button class="activity"><router-link to="/activity/update">Update Kegiatan</router-link></button>
        <button class="activity"><router-link to="/activity/delete">Hapus Kegiatan</router-link></button>
      </div>
    </section>

    <div>
      <div class="flex w-full flex-wrap gap-10 px-20 pt-10 pb-0 justify-center">
        <div
          id="showGetData" v-if="showGetData"
          class="card cursor-pointer"
          v-for="page in filteredPages"
          :key="page.id"
          :id="'getData_' + page.id"
        >
          <div class="image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  stroke="#000000"
                  d="M20 7L9.00004 18L3.99994 13"
                ></path>
              </g>
            </svg>
          </div>
          <strong>{{ page.title }}</strong>
          <div class="card__body">{{ page.content }}</div>
          <span>{{ page.tags }}</span>
        </div>
      </div>
    </div>

    <section v-if="showAddActivity" id="addActivity">
      <form class="form" ref="activityForm" @submit.prevent="addActivity">
        <input placeholder="Input Title" v-model="title" class="input" type="text" />
        <input placeholder="Input Content" v-model="content" class="input" type="text" />
        <textarea placeholder="Input Tags / Label" v-model="tags" class="input" type="text"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      pages: [],
      showGetData: true,
      showAddActivity: false,
      title: "",
      content: "",
      tags: ""
    };
  },
  computed: {
    filteredPages() {
      return this.pages.filter((page) =>
        page.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("http://localhost:3002/pages");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        this.pages = data.pages;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    },
    async searchActivity() {
      try {
        const response = await fetch("http://localhost:3002/pages");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        this.pages = data.pages;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    },

    toggleActivityView() {
      this.showGetData = !this.showGetData;
      this.showAddActivity = !this.showAddActivity;
    },

    async addActivity() {
      const data = {
        title: this.title,
        content: this.content,
        tags: this.tags
      };

      try {
        const response = await fetch("http://localhost:3002/pages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to add Activity");
        }

        this.$refs.activityForm.reset();
        this.showGetData = true;
        this.showAddActivity = false;
        window.location.reload()
      } catch (error) {
        console.error("Error:", error);
        alert("Tambah gagal, silakan coba lagi.");
      }
    },
  },
};
</script>

<style>
.text-notion {
  font-size: 36px;
  font-weight: 700;
}

.text-notion-nrp {
  font-size: 20px;
  font-weight: 700;
}

input {
  border: 2px solid royalblue;
  padding: 10px;
  border-radius: 10px;
}

button {
  background-color: royalblue;
  padding: 10px 25px;
}

.activity {
  background-color: royalblue;
  padding: 10px 25px;
  color: white;
  border-radius: 20px;
}

.card {
  --bg: #4d4dd3;
  --hover-bg: #003de5;
  --hover-text: white;
  max-width: 23ch;
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  color: white;
}

.card__body {
  color: white;
  line-height: 1.5em;
  font-size: 1em;
}

.card > :not(span) {
  transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card > strong {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -0.035em;
}

.card span {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card:hover span {
  top: 0;
  font-size: 0.8em;
}

.card:hover {
  background: var(--hover-bg);
}

.card:hover > div,
.card:hover > strong {
  opacity: 0;
}

.image {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2feee;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  animation: animate 0.6s linear alternate-reverse infinite;
  transition: 0.6s ease;
}

.image svg {
  color: #0afa2a;
  width: 2rem;
  height: 2rem;
}

/* add */

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
  gap: 20px;
  padding: 30px;
  background: linear-gradient(to bottom, #0077be, #3b8df2);
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
  border-radius: 5px;
  background-color: transparent;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  color: rgb(255, 255, 255);
  border: 2px solid #3b8df2;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

button:hover {
  background-color: #0077be;
  font-size: 17px;
  transform: scale(1.05) rotateY(20deg) rotateX(10deg);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>
