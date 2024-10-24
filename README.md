<style>
        body.light-mode {
            background-color: white;
            color: black;
        }

        body.dark-mode {
            background-color: black;
            color: white;
        }

        body.serif {
            font-family: "Times New Roman", Times, serif;
        }

        body.sans-serif {
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
        }

        #task-input {
            width: 80%;
            padding: 10px;
            margin-bottom: 10px;
        }

        button {
            padding: 10px;
            margin: 5px;
            cursor: pointer;
        }

        .appearance-controls {
            text-align: center;
            margin-top: 20px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            padding: 8px;
            background: lightgray;
            margin: 5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        li.completed {
            text-decoration: line-through;
        }

        .delete-btn {
            background: red;
            color: white;
            border: none;
            padding: 5px;
        }
    </style>
</head>

<body class="light-mode sans-serif">
    <h1>My To-Do List</h1>
    <!-- To-Do List Section -->
    <div style="text-align: center;">
        <input type="text" id="task-input" placeholder="Add a new task...">
        <button id="add-task-btn">Add</button>
    </div>
    <ul id="task-list"></ul>
    <div class="appearance-controls">
        <h2>Change Appearance</h2>
        <select id="bg-color">
            <option value="white">Select Background Color</option>
            <option value="lightgray">Light Gray</option>
            <option value="lightblue">Light Blue</option>
            <option value="lightgreen">Light Green</option>
            <option value="lightyellow">Light Yellow</option>
        </select>
        <br><br>
        <button id="increase-font-size">Increase Font Size</button>
        <button id="decrease-font-size">Decrease Font Size</button>
        <button id="toggle-dark-mode">Toggle Dark Mode</button>
        <button id="change-font-style">Change Font Style</button>
    </div>
    <script src="script.js"></script>
</body>
