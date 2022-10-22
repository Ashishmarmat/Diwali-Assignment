import { setToFav} from '.';

export const savePosts = (item:any, data:any) => (dispatch: any) => {
  let dataArr = [...data]; 
  let index = dataArr.findIndex((itm:any)=> itm.id == item.id);
  if(index > -1){
    dataArr.splice(index, 1);
  }else{
    dataArr.push(item)
  }
  dispatch(setToFav(dataArr))
};