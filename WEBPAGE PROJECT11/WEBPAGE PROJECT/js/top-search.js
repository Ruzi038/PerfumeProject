
const topSearchInput = document.querySelector(".top-header input");


topSearchInput.addEventListener("input", () => {
    const term = topSearchInput.value.toLowerCase();


    const filtered = perfumes.filter(p => {
        const notesString = [...p.notes.top, ...p.notes.middle, ...p.notes.base]
            .join(" ")
            .toLowerCase();


        return p.name.toLowerCase().includes(term) || notesString.includes(term);
    });


    renderPerfumes(filtered);
});