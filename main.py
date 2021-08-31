from flask import Flask, send_from_directory, after_this_request,request,make_response
from flask_restful import Resource, Api, reqparse
import sys
import os
import dbwork2
sys.path.append(os.getcwd())




app = Flask(__name__)
api = Api(app)
parser = reqparse.RequestParser()
parser.add_argument('host')
parser.add_argument('name')
parser.add_argument('date')
parser.add_argument('size')


app = Flask(__name__)

# @app.after_request
# def after_request(response):
#     white_origin= ['http://localhost:5000','http://127.0.0.1:5000','http://192.168.0.101:5000']
#     print(request.headers)
#     print(request.referrer)
#     if request.headers['Origin'] in white_origin:
#         response.headers['Access-Control-Allow-Origin'] = request.referrer
#         response.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
#         response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
#     return response

@app.route('/')
def index():
    tmp = []
    f = open(os.getcwd()+'/http/admin/index.html', 'r+')
    tmp = f.read()
    return tmp


@app.route('/getinfo/')
def getinfo():
    resp = make_response()
    resp.headers['Access-Control-Allow-Origin'] = '*'
    xt = dbwork2.Database()
    resp.data=xt.getdata()
    # print(xt.getdata())

    # @after_this_request
    # def add_header(response):
    #     return response

    return resp

@app.route('/js/<path:path>')
def js(path):
    print(path)
    return send_from_directory('http/admin/js',path)

@app.route('/dist/<path:path>')
def dist(path):
    print(path)
    return send_from_directory('http/admin/dist',path)


# @app.route('/post/', methods = ['GET', 'POST'])
# def post():
#     args = parser.parse_args()
#     out = args['host'],args['name'],args['date'],args['size']
#
#     xt = dbwork2.Database()
#     xt.insert_data(out)
#
#     return 'kkj'



# class HelloWorld(Resource):
#     post
#
#
#     def get(self):
#         print(self.__dict__)
#         return {'hello': 'get'}
#
#     def put(self):
#         return {'hello': 'put'}
#
#     def delete(self):
#         return {'hello': 'delete'}
#
# api.add_resource(HelloWorld, '/')




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')