// we should allways use the process.pwd as opfs location like npm does 
// if global then we use the users home 
// To Apply System Changes we will follow the postfix pattern check fix for
// files outside /root /home/user
// path equals to the path that produced the handle without the name. 
// resolvedPath = handle.path +'/' + handle.name
// otherHandle.resolve(): runs find recursiv. 
const IDirectoryHandle = (name,path) => ({
  getDirectory() {}
  name: dirEnt[0],
  kind: 'directory'
});

const IFileHandle = (dirEnt) => ({
  getFile() {}
})

const IFileSystemHandle = (dirEnt) => dirEnt ? ({
  ...([,'file','directory','link'].find((kind,i) => i === dirEnt[dirEnt[1]]) === 'directory' && IDirectoryHandle(dirEnt[0]))
}) : IDirectoryHandle('.')
export StorageManager = navigator ? navigator.storage : ({
  getDirectory: () => fs.promises
    .readdir('.',{ recursive:false,withFileTypes: true }).then(dirEnts=>dirEnts.map(([ent,typeSymbol])=>IDirectoryHandle))
})
