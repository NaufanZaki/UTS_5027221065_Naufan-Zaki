<template>
    <nav class="bg-gray-800 shadow-lg">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <!-- <img src="~/assets/logo.svg" alt="Logo" class="h-8 mr-2"> -->
          <h1 class="text-white text-lg font-semibold">TidyTask</h1>
        </div>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-gray-300 transition duration-300">Login</a></li>
          <li><a href="#" class="text-white hover:text-gray-300 transition duration-300">Home</a></li>
          <li><a href="#" class="text-white hover:text-gray-300 transition duration-300">Task</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  nav a {
    transition: color 0.3s ease-in-out;
  }
  
  nav a:hover {
    color: #CBD5E0;
  }
  </style>
  