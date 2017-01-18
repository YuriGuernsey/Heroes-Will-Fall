/* Inserts users name into the HTML file.
This allows the website to interact with thn user in a more personal way.
For example, Hello {users name}, how are you today? */
function insertText() {
    var user = getCookie("username");
    document.getElementById('User-name').innerHTML = user + ".";
}