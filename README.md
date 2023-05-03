# quokka-bmad
setup for basic quokka'ing in vscode

simple starter repo for use with quokka plugin for vscode to use as a self contained learning or prototyping env, or good for practicing algos or leetcode type stuff with JS or TS
basic commands are:

Cmd/Ctrl + K, T: Create New Quokka File
Cmd/Ctrl + K, Q: Restart Quokka on Current File

When creating a new file with that command, Quakka will start running - when saving the new file and giving it a name, quakka will stop on that file.  Use the quokka restart command to restart it.
After that, it should keep running upon save after that initial 1 time restart.

This project is not set up for modules so multiple files will polute the global scope - for example cannot declare the same const variable in 2 files - will improve later.  For now, use block scopes to avoid poluting global scope.
