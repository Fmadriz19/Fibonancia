from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def fibonacci_dynamic(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

@app.route("/fibonacci/<int:n>")
def calculate_fibonacci(n):
    result = fibonacci_dynamic(n)
    return jsonify({'result': result})


def lcs_dynamic(s1, s2):
    m = len(s1)
    n = len(s2)
    # dp will store solutions as the iteration goes on
    dp = [
    [None] * (n + 1) for item in range(m + 1)
    ]
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0 or j == 0:
                dp[i][j] = 0
            elif s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else :
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

@app.route("/lcs/<string:s1>/<string:s2>")

def calculate_lcs(s1, s2):

    print("Resultado de la subsecuencia común más larga:", lcs_dynamic(s1, s2)  )
    
    return jsonify({'result':lcs_dynamic(s1, s2)})

if __name__ == "__main__":
    app.run()

