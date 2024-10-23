const medications = [
    "Paracetamol",
    "Ibuprofen",
    "Aspirin",
    "Amoxicillin",
    "Cetirizine",
    "Loratadine",
    "Metformin",
    "Atorvastatin",
    "Omeprazole",
    "Simvastatin",
    "Furosemide",
    "Gabapentin",
    "Tramadol",
    "Losartan",
    "Amlodipine"
  ];
  
  function filterSuggestions() {
    const input = document.getElementById("search-input");
    const suggestionsList = document.getElementById("suggestions-list");
    const filter = input.value.toLowerCase();
  
    suggestionsList.innerHTML = "";
  
    if (filter.length > 0) {
      const filteredMedications = medications.filter((med) =>
        med.toLowerCase().includes(filter)
      );
  
      filteredMedications.forEach((med) => {
        const listItem = document.createElement("li");
        listItem.textContent = med;
        listItem.onclick = () => selectSuggestion(med);
        suggestionsList.appendChild(listItem);
      });
  
      suggestionsList.style.display = filteredMedications.length ? "block" : "none";
    } else {
      suggestionsList.style.display = "none";
    }
  }
  
  function selectSuggestion(medication) {
    const input = document.getElementById("search-input");
    input.value = medication;
  
    document.getElementById("suggestions-list").style.display = "none";
  }
  
  function addMedication() {
    const input = document.getElementById("search-input");
    if (input.value) {
      alert(`Medication added: ${input.value}`);
    } else {
      alert('Please select or type a medication.');
    }
  }