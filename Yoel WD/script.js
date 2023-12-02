function calc(){
  let euro = euroFild.value;
  let result = euro * 16.46;
nkf.value = result.toFixed(2).replace('.',',');
}