# Ban bots on Twitch
#### *This project incluide Javascript code*

## Content 📜 
- [Requeriments 📚](#requeriments-)
- [Configurate Enviroment 💻](#configurate-enviroment-)
- [Running Script 🚗](#running-script-)
- [Execution ⚔](#execution-)
- [FAQ's 💼](#faqs-)
___

## Requeriments 📚
 - [Nodejs](https://nodejs.org/)
 - Code Editor
    - [Visual Studio Code](https://code.visualstudio.com/)
    - [Notepad++](https://notepad-plus-plus.org/downloads/)
    - [Sublime Text](https://www.sublimetext.com/)
    - Or any text editor, for example Notepad on Windows.
___

## Configurate Enviroment 💻

### **Step 1**
#### You need to install node dependencies.
on your **shell**.
```
npm install tmi.js
```
> Remember to be inside the BanBotsTwitch folder and be at the root of the project before executing the command. 
### **Step 2**
#### Find **.env.example** file on this project, copy and paste .env.example file, edit file name as **.env** and open this file with your code editor. 

### **Step 3**
#### Set your credentials in each header.
```
- username=
- password=
- channel=
```
- **Username**
    - The account (username) that the chatbot uses to send chat messages. This can be your Twitch account. Alternately, many developers choose to create a second Twitch account for their bot, so it's clear from whom the messages originate.
- **Password (OAUTH_TOKEN)**
    - The token to authenticate your chatbot with Twitch's servers. Generate this with [TwitchApps](https://twitchapps.com/tmi/) (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account. The token will be an alphanumeric string.
- **Channel**
    - The Twitch channel name where you want to run the bot. Usually this is your main Twitch account.
> Do not put the quotes, only the data after the equal.
___
## Running Script 🚗

#### You need set next command in any Terminal **shell**.
```
node Main.js
```
> Remember to be inside the src folder before executing the command on your 
___
## Execution ⚔
### **Step 1**
#### Create a file named "**List.txt**", this list will be read by the Script.

### **Step 2**
#### Inside the file "**List.txt**" we must write all the commands that will be read by the Script, **example**: 
```
/ban AnironilBrownQd5 bot
/ban AnironilDavisF4726 bot
/ban AnironilEdwardsBs7 bot
```
> If you find it hard to write **/ban AnironilBrownQd5 bot** over and over again, you can check out this other [Script](https://github.com/OrtizUriel112/SentencesUsersTwitch).
### **Step 3**
#### The Script has 2 commands for you to use.

```
!welcome
```
```
!banlist
```
- **Welcome**
    - Write a welcome to test that everything is fine, read the text written in "**Welcome.txt**".
- **BanList**
    - Start executing the code sentences that you have written in the "**List.txt**" file.
> While a command is executed you should not write anything else, wait for an instruction to finish properly.
___
## FAQ's 💼
- If Twitch need Two-step verification, check this [Segurity content](https://www.twitch.tv/settings/security).
- If you still have doubts, you can read the official information on [Twitch](https://dev.twitch.tv/docs/irc#next-steps)
- **What is the Shell?** The shell is the terminal that allows you to execute commands and these are interpreted by the computer, types terminal:
    - CMD (Already installed)
    - [Git Bash](https://git-scm.com/)
    - Windows PowerShell (It is already installed only on Windows)
    - [Windows Terminal](https://www.microsoft.com/es-mx/p/windows-terminal/9n0dx20hk701)