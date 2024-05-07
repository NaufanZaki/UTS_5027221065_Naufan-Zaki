<template>
    <div class="grid grid-cols-3 min-h-screen">
      <!-- Navigation Section -->
      <div class="bg-gray-800 text-white p-4">
        <h2 class="text-lg font-semibold mb-4">Navigation</h2>
        <ul>
          <li v-for="(item, index) in userCreations" :key="index" class="mb-2">{{ item }}</li>
        </ul>
      </div>
  
      <!-- Page Creation Section -->
      <div class="bg-gray-200 p-4">
        <h2 class="text-lg font-semibold mb-4">Page Creation</h2>
        <div v-if="!isEmpty(textContentsBeforeChecklist) || !isEmpty(checklistItems)">
          <p>Page is empty. Please add content.</p>
        </div>
        <div v-for="(content, index) in textContentsBeforeChecklist" :key="index">
          <template v-if="content.type === 'text'">
            <textarea class="w-full h-32 border rounded-lg mb-4 p-2" :placeholder="'Text ' + (index + 1)" v-model="content.content"></textarea>
          </template>
          <template v-else-if="content.type === 'checklist'">
            <table class="w-full mb-4">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Checklist Item</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in content.content" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ item.content }}</td>
                  <td><input type="checkbox" v-model="item.isDone"></td>
                </tr>
              </tbody>
            </table>
          </template>
        </div>
      </div>
  
      <!-- Feature Menu Section -->
      <div class="bg-gray-300 p-4">
        <h2 class="text-lg font-semibold mb-4">Feature Menu</h2>
        <button @click="openTextModal" class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-2">Add Text</button>
        <button @click="openAddListModal" class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-2">Add Checklist</button>
      </div>
  
      <!-- Text Modal -->
      <div v-if="isTextModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-4">Add Text</h2>
          <textarea v-model="textModalContent" class="w-full h-32 border rounded-lg mb-4 p-2" placeholder="Enter text..."></textarea>
          <button @click="addText" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mb-2">Add</button>
          <button @click="closeTextModal" class="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg">Cancel</button>
        </div>
      </div>
  
      <!-- Add List Modal -->
      <div v-if="isAddListModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-4">Add Checklist</h2>
          <input v-model.number="numberOfLists" type="number" class="w-full border rounded-lg mb-4 p-2" placeholder="Enter number of checklist items...">
          <div v-for="(list, index) in numberOfLists" :key="index">
            <input v-model="lists[index]" type="text" class="w-full border rounded-lg mb-2 p-2" :placeholder="'Enter checklist item ' + (index + 1)">
          </div>
          <button @click="addNumberOfLists" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mb-2">Add</button>
          <button @click="closeAddListModal" class="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userCreations: ["Page 1", "Page 2", "Page 3"],
        textContentsBeforeChecklist: [],
        textModalContent: "",
        isTextModalOpen: false,
        isAddListModalOpen: false,
        numberOfLists: 0,
        lists: []
      };
    },
    methods: {
      openTextModal() {
        this.isTextModalOpen = true;
      },
      closeTextModal() {
        this.isTextModalOpen = false;
        this.textModalContent = "";
      },
      addText() {
        this.textContentsBeforeChecklist.push({ type: 'text', content: this.textModalContent });
        this.textModalContent = "";
        this.isTextModalOpen = false;
      },
      openAddListModal() {
        this.isAddListModalOpen = true;
      },
      closeAddListModal() {
        this.isAddListModalOpen = false;
        this.numberOfLists = 0;
        this.lists = [];
      },
      addNumberOfLists() {
        const lists = this.lists.map(item => ({ content: item, isDone: false }));
        this.textContentsBeforeChecklist.push({ type: 'checklist', content: lists });
        this.isAddListModalOpen = false;
      },
      isEmpty(arr) {
        return !Array.isArray(arr) || arr.length === 0;
      }
    }
  };
  </script>
  
  <style scoped>
  /* CSS lainnya */
  </style>
  