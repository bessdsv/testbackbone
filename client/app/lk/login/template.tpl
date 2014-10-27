<script id = "lk-login-template-id"
        type = "text/template">
    <form class = "form-signin"
          role = "form" novalidate>
        <h2 class = "form-signin-heading"><%_ formLoginHeader %></h2>
        <div class="alert alert-danger error" role="alert" style="display: none"></div>
        <input type = "text"
               class = "form-control"
               placeholder = "<%_ formLoginLabelLogin %>"
               required
               autofocus
               name = "login"
               value = "" >
        <input type = "password"
               class = "form-control"
               name = "password"
               placeholder = "<%_ formLoginLabelPassword %>"
               required value="">
        <button class = "btn btn-lg btn-primary btn-block"
                type = "submit"><%_ formLoginButtonSubmit %>
        </button>
    </form>
</script>