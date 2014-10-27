<script id = "lk-user-template-id"
        type = "text/template">
    <form class = "form-horizontal"
          role = "form">
        <div class = "form-group">
            <label for = "surname"
                   class = "col-sm-2 control-label"><%_ userFormSurnameLabel %></label>

            <div class = "col-sm-10">
                <input type = "text"
                       class = "form-control"
                       id = "surname"
                       name = "surname"
                       placeholder = "<%_ userFormSurnamePlaceholder %>">
            </div>
        </div>
        <div class = "form-group">
            <label for = "firstname"
                   class = "col-sm-2 control-label"><%_ userFormFirstnameLabel %></label>

            <div class = "col-sm-10">
                <input type = "text"
                       class = "form-control"
                       id = "firstname"
                       name = "firstname"
                       placeholder = "<%_ userFormFirstnamePlaceholder %>">
            </div>
        </div>
        <div class = "form-group">
            <label for = "middlename"
                   class = "col-sm-2 control-label"><%_ userFormMiddlenameLabel %></label>

            <div class = "col-sm-10">
                <input type = "text"
                       class = "form-control"
                       id = "middlename"
                       name = "middlename"
                       placeholder = "<%_ userFormMiddlenamePlaceholder %>">
            </div>
        </div>
        <div class = "form-group">
            <label for = "birthday"
                   class = "col-sm-2 control-label"><%_ userFormBirthdayLabel %></label>
            <div class = "col-sm-10">
              <div class='input-group date' id='birthday'>
                <input type='text' class="form-control" id = "birthday"
                       name = "birthday"
                       placeholder = "<%_ userFormBirthdayPlaceholder %>"/>
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                <script type="text/javascript">
                  $(function () {
                    $('#birthday').datetimepicker({
                      language: '<%= defaultLang %>'
                    });
                  });
</script>
              </div>
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-sm-offset-2 col-sm-10">
                <button type = "submit"
                        class = "btn btn-lg btn-primary"><%_ userFormSubmitButtonText %>
                </button>
            </div>
        </div>
    </form>
</script>