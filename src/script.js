var txt = "Edit";
function edit_func() {
    if (txt == "Edit") {
        txt = "Done"
        let txt2 = txt.bold();
        document.getElementById('edit').innerHTML = txt2;
    }
    else {
        txt = "Edit"
        let txt2 = txt.bold();
        document.getElementById('edit').innerHTML = txt2;
    }
}