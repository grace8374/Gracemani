const header = Document.queryselector("header")
window.addEventListener("scroll",function(){
    header.classlist.toggle("sticky",this.window.scroll> 100);
});