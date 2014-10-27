<script id="root-template-id" type="text/template">
  <nav class="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only"><%_ appMenuToggleText %></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#main"><%_ appTitle %></a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active menuItem" id="menuItemMain"><a href="#main"><%_ menuItemMainText %></a></li>
          <li class="menuItem" id="menuItemLk"><a href="#lk"><%_ menuItemLkText %></a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
  <div class="container">
    <div class="row row-offcanvas row-offcanvas-right body">
    </div><!--/row-->
    <hr>
    <footer>
      <p>&copy; <%_ copyrightCompanyName %> 2014</p>
    </footer>
  </div><!--/.container-->
</script>