// si déjà connecté redirige vers l'app directement
if ( localStorage.getItem("user_id") ) document.location.href = "app.html"
else localStorage.setItem("flower-level", "4")