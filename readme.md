🔧 1. Setup
First, install Git from https://git-scm.com/ if it's not installed already.

Then configure your details (only once):
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

#To verify the first step if it is already been done in past or not --
git config --global user.name
git config --global user.email



📁 2. Create a New GitHub Repo
Go to https://github.com

Click "New Repository"
Name it (e.g., my-first-repo)
Choose Public or Private
Click Create repository

🧱 3. Push Local Files to GitHub
Assume you have a folder on your computer with files you want to push.

Step-by-step:
cd path/to/your/project      # Go into your project folder
git init                     # Initialize Git in the folder
git add .                    # Add all files
git commit -m "Initial commit"  # Commit with a message
git branch -M main           # Rename branch to main
git remote add origin https://github.com/your-username/my-first-repo.git
git push -u origin main      # Push to GitHub


📝 4. Make Changes and Commit Them
After editing an existing file or adding a new one:

git add filename         # Add a specific file
# or use: git add .      # Add all modified/new files
git commit -m "Describe what you changed"
git push                 # Push changes to GitHub


➕ 5. Add New Files Later
Just copy the new files into your repo folder and:

git add newfile.py
git commit -m "Added newfile.py"
git push


📦 Common Git Commands Summary
Command	Purpose

git init	        Start Git tracking in a folder
git status	        See current changes
git add .	        Stage all changes
git commit -m "msg"	Commit with message
git push	        Push to GitHub
git pull	        Pull updates from GitHub

