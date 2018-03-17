import { observable, action } from "mobx"

var AppStore = observable({
	page : 'page1'
});

AppStore.setDisplay = action( (newPage)=>{
	AppStore.page = newPage;

})


export default AppStore;