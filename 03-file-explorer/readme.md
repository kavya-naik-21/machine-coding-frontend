Design file explorer using react
- nested file folder structure
- expand/collapse folders
- add remove file folder

don't start coding right away
ask interviewer - how/where to get data for this file folder
- how/where to get data for this file folder ?
    - most interviewers ask to make own data or rarely give APIs to fetch data
        - using API is easy as compared to creating your own data, as it is critical
        - whenever you create your own data try to make use of json
    - there are many data structures which can be used 
    - We can use array of objects, each object represents each file and folder
    - file/folder name and something to distingush it ex: type: "folder", type : "file", isFolder: true
    - children will have nested childs - list/array of nodes
    - above style is a tree data structure style
    - always have ids
- apply recursion on your data, because children are used
- create another component to show list of objects
