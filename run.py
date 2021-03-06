#!/usr/bin/env python3
from website import create_app

app = create_app() # default config

if __name__ == '__main__':
    app.run(threaded=True, debug=True)
