import React from "react";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <ul>
        Nikita Clark
        <li><a href="#lab1">Lab 1</a></li>
        <li><a href="#lab2">Lab 2</a></li>
        <li><a href="#lab3">Lab 3</a></li>
        {/* Add more labs as needed */}
        <li><a href="#kanbas">Kanbas</a></li>
      </ul>
      {/* Add the GitHub link */}
      <p>
        <a href="https://github.com/NikitaClark/kanbas-react-web-app" id="wd-github">
          View the GitHub Repository
        </a>
      </p>
    </div>
  );

}
