/**
 * Created by Administrator on 2017-06-30.
 */
export default{
  mRoute(string){
    if(typeof string === 'string'){
      this.$router.push(string)
    }else{
      new Error('人民');
    }
  }
}
