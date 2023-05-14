// we should allways use the process.pwd as opfs location like npm does 
// if global then we use the users home 
// To Apply System Changes we will follow the postfix pattern check fix for
// files outside /root /home/user

export StorageManager = navigator ? navigator.storage : ({
  getDirectory: () => 
})
