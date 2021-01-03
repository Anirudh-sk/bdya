document.getElementById("pass-input").addEventListener('keydown', (e) => {
    // console.log(e.key);
    if (e.key === 'Enter') {
        const password = (e.currentTarget.value).trim();
        if (password === "shreeshu05") {
            // document.getElementById("main").hidden = false;
            // document.getElementById("pass-input").hidden = true;
            document.body.innerHTML = `
            <iframe src="https://anirudh-sk.github.io/bdya/test.html" frameborder="0" style="width:100%;height:97vh"></iframe>
            
            `
        }
    }
})
