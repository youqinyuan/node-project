function Header(){
	this.createDom();
};
Header.temp = `<nav class="navbar navbar-default navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	    	<img src="/images/buy.png">
	      <a class="navbar-brand" href="#">超市账单管理系统</a>
	    </div>
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">	      
	      <ul class="nav navbar-nav navbar-right reg-sign-link">
	        <li data-toggle="modal" data-target="#loginModal"><a href="/html/login.html">登录</a></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>`;
$.extend(Header.prototype,{
	createDom(){
		$(Header.temp).appendTo("header");
	}
})
new Header();