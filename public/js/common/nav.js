function Nav(){
	this.createDom();
};
Nav.temp = `
		<div class="list-group">
		  <a href="/" class="list-group-item active">
		    功能列表
		  </a>
		  <a href="#" class="list-group-item">
		  	<img src="/images/zd.png">
		  	账单管理
			</a>
		  <a href="#" class="list-group-item">
		  	<img src="/images/gys.png">
		  	供应商管理
			</a>
		  <a href="/html/userManagement.html" class="list-group-item userman">
		  	<img src="/images/yh.png">
		  用户管理
		</a>
		  <a href="#" class="list-group-item">
		  	<img src="/images/mm.png">
		  密码修改
		</a>
		  <a href="/" class="list-group-item">
		  	<img src="/images/tc.png">
		  退出系统
		</a>
		</div>`;
$.extend(Nav.prototype,{
	createDom(){
		$(Nav.temp).appendTo(".nav-menu");
	}
})
new Nav();