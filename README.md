##GoRaceInfo is a fictional social media site for racing enthusiasts.
Built using ReactJs and Django.

#Getting Started:
Requires:
- Python version 3+
- Pip (usually bundled with python download)
- NodeJS version 8+

For MacOS


##Backend:
1. Create Python Virtual Environment and Activate.
```
  pip3 install virtualenv
  virtualenv 'environment'
  source 'environment'/bin/activate
```
2. Install Python requirements.
```
  cd backend
  pip install -r requirements.txt --no-index --find-links file:///tmp/packages
```
3. Start Django Development Server.
```
  python manage.py runserver
```

The server is now listening at 'http://localhost:8080'.


##Web Client:
1. Download dependencies.
```
  cd web-client
  npm install
```
2. Start Webpack Development Server.
```
  npm run start:dev
```
You can now connect to the web client at 'http://localhost:8000'.

Use the following credentials to sign-in to the site.
username: dev
password: helloWorld

The registration form does not work at this time.
