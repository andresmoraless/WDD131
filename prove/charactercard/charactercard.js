const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
  
    attacked: function () {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        alert(`${this.name} has died!`);
      }
      renderCharacter(this);
    },
  
    levelUp: function () {
      this.level += 1;
      renderCharacter(this);
    },
  };
  
  function renderCharacter(char) {
    const statsDiv = document.querySelector(".stats");
    statsDiv.innerHTML = `
      <p>Class: ${char.class}</p>
      <p>Level: ${char.level}</p>
      <p>Health: ${char.health}</p>
    `;
  }
  

  renderCharacter(character);
  

  document.querySelector("#attacked").addEventListener("click", () => character.attacked());
  document.querySelector("#levelUp").addEventListener("click", () => character.levelUp());
  