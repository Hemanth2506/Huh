
  let simulationTimer = null;
  let currentProgress = 0;
  let initialParticles = 94;
  let currentParticles = 94;
  const GAUGE_CIRC = 440;

  const waterSource = document.getElementById("waterSource");
  const initialValue = document.getElementById("initialValue");

  waterSource.addEventListener("change", function(){
    initialValue.value = this.value;
    updateInitialValue();
  });

  initialValue.addEventListener("input", updateInitialValue);

  function setGauge(percent){
    const offset = GAUGE_CIRC - (GAUGE_CIRC * percent / 100);
    document.getElementById("gaugeFill").style.strokeDashoffset = offset;
  }

  function setStatus(running){
    document.getElementById("navDot").className = "status-dot" + (running ? " live" : "");
    document.getElementById("navStatus").textContent = running ? "Running" : "Standby";
  }

  function updateInitialValue(){
    initialParticles = parseInt(initialValue.value) || 1;
    currentParticles = initialParticles;

    document.getElementById("initialDisplay").textContent = initialParticles;
    document.getElementById("remainingDisplay").textContent = initialParticles;
    document.getElementById("beforeNumber").textContent = initialParticles;
    document.getElementById("afterNumber").textContent = initialParticles;
    document.getElementById("removalDisplay").textContent = "0%";
    document.getElementById("progressBar").style.width = "0%";
    setGauge(0);
  }

  function createParticles(){
    const tank = document.getElementById("tank");
    tank.querySelectorAll(".particle").forEach(p => p.remove());

    const count = Math.min(Math.max(Math.floor(initialParticles / 3), 15), 70);

    for(let i = 0; i < count; i++){
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 94 + "%";
      p.style.top = Math.random() * 65 + 15 + "%";
      tank.appendChild(p);
    }
  }

  function startSimulation(){
    clearInterval(simulationTimer);
    createParticles();
    currentProgress = 0;
    currentParticles = initialParticles;
    setStatus(true);
    simulationTimer = setInterval(runStep, 600);
  }

  function runStep(){
    currentProgress += 5;
    if(currentProgress > 85){
      currentProgress = 85;
      clearInterval(simulationTimer);
      setStatus(false);
    }

    currentParticles = Math.round(initialParticles * (1 - currentProgress / 100));

    document.getElementById("remainingDisplay").textContent = currentParticles;
    document.getElementById("removalDisplay").textContent = currentProgress + "%";
    document.getElementById("progressBar").style.width = currentProgress + "%";
    document.getElementById("afterNumber").textContent = currentParticles;
    setGauge(currentProgress);

    const particles = document.querySelectorAll(".particle");
    const removeCount = Math.floor(particles.length * (currentProgress / 100));
    particles.forEach((particle, index) => {
      if(index < removeCount) particle.style.opacity = "0";
    });
  }

  function pauseSimulation(){
    clearInterval(simulationTimer);
    setStatus(false);
  }

  function resetSimulation(){
    clearInterval(simulationTimer);
    currentProgress = 0;
    currentParticles = initialParticles;
    setStatus(false);
    updateInitialValue();
    createParticles();
  }

  const layerInformation = [
    { name:"Mesh", desc:"Initial barrier for larger dirt and debris", text:"The mesh acts as an initial physical barrier intended to capture larger dirt, debris and particles before water enters the finer filtration stages." },
    { name:"Activated Carbon", desc:"Adsorption-based purification stage", text:"Activated carbon provides an adsorption-based purification stage, included as part of the proposed water purification process." },
    { name:"Coconut Fiber", desc:"Fine particle filtration and support layer", text:"Coconut fiber is used as a natural filtration material and provides a supporting layer for fine-particle filtration." },
    { name:"Activated Carbon", desc:"Additional purification stage", text:"A second activated-carbon stage provides additional purification in the proposed multilayer filter." },
    { name:"Cotton + AISI 5052 Aluminum", desc:"Fine filtration support", text:"Cotton is arranged around a 2mm AISI 5052 aluminum alloy insert, acting as a fine filtration support layer." },
    { name:"Vetiver Root", desc:"Natural filtration / biological support layer", text:"Vetiver root is included as a natural filtration and biological-support material in the proposed system." },
    { name:"Zeolite Stone", desc:"Final filtration and mineral-support stage", text:"Zeolite is used as the final material layer in the proposed filter design. Its role should be validated experimentally for the specific microplastic-removal claim." }
  ];

  function buildSchematic(){
    const container = document.getElementById("schematic");
    layerInformation.forEach((layer, i) => {
      const row = document.createElement("div");
      row.className = "layer-row";
      row.onclick = () => showLayer(i);
      row.innerHTML =
        '<div class="layer-index mono">' + String(i + 1).padStart(2,"0") + '</div>' +
        '<div class="layer-body">' +
          '<div><div class="layer-name">' + layer.name + '</div><div class="layer-desc">' + layer.desc + '</div></div>' +
          '<div class="layer-arrow">&#8250;</div>' +
        '</div>';
      container.appendChild(row);
    });
  }

  function showLayer(i){
    const layer = layerInformation[i];
    document.getElementById("modalTitle").textContent = "Stage " + String(i + 1).padStart(2,"0") + " — " + layer.name;
    document.getElementById("modalText").textContent = layer.text;
    document.getElementById("layerModal").style.display = "flex";
  }

  function closeLayer(){
    document.getElementById("layerModal").style.display = "none";
  }

  buildSchematic();
  updateInitialValue();
  createParticles();
