from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def prep():
    return render_template('prep.html', name=NameError)

if __name__ == "__main__":
    app.run(debug=True)