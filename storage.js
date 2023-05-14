// we should allways use the process.pwd as opfs location like npm does 
// if global then we use the users home 
// To Apply System Changes we will follow the postfix pattern check fix for
// files outside /root /home/user

// otherHandle.resolve(): runs find recursiv. 


// FileSystemAccess Cache Default Manual Managed works most best in
// most cases as no additional handling is needed.
// path equals to the path that produced the handle without the name. 
// resolvedPath = handle.path +'/' + handle.name `${handle.path||''}${handle.name ? '/':'.'}${handle.name||''}`
// Why? to speed up symlinks and other processes. like a readdir followed by some fileOperations.
const FileSystemIndex = {}
// .entries .values .keys 
// Exists as long as a dir is open when .close the FileSystemIndex gets Empty
// Stores the current handle and its state if it is open or ReadWrite.


// TODO: do not go relativ more deep in the fs module then current process.pwd and minimum deep process.pwd
// if you do a readdir you get the dirEntrie, fileSystemIndexKey === path
const IDirectoryHandle = (name='',path='') => ({
  getDirectory: () => fs.promises
    .readdir(`${path}${ (path||name) ? '/' : '.' }${name}`,{ recursive:false,withFileTypes: true }).then(dirEnts=>dirEnts.map(([ent,typeSymbol])=>IDirectoryHandle)),
  name: dirEnt[0],
  kind: 'directory'
});

const IFileHandle = (dirEnt,path) => ({
  getFile() {}
})

const IFileSystemHandle = (dirEnt,resolvedPath) => dirEnt ? ({
  ...([,'file','directory','link'].find((kind,i) => i === dirEnt[dirEnt[1]]) === 'directory' && IDirectoryHandle(dirEnt[0],resolvedPath))
}) : IDirectoryHandle('.')

export StorageManager = navigator ? navigator.storage : IDirectoryHandle('.')
