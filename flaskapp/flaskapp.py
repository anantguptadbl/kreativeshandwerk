# Imports
import os,json
from flask import Flask
from flask import Flask,render_template,request
import numpy as np
import sys,site

# Uncomment for AWS
site.addsitedir('/home/ubuntu/.local/lib/python2.7/site-packages')
sys.path.insert(0, "/var/www/html/flaskapp")
#from mockup.app import app as application 
#keras.backend.clear_session()


# Initial level flask configuration
print "the file path is " + os.path.dirname(os.path.abspath(__file__))
template_dir = os.path.dirname(os.path.abspath(__file__)) + '/static'
print "The template dir is " + template_dir
app = Flask(__name__,static_folder=template_dir,template_folder=template_dir)

#app = Flask(__name__)
#@app.route('/')
#def hello_world():
#  return 'Hello from Flask!'

# We will kep the metadata read in a single dict
with open('../productMetaData.csv','r') as metaFile:
	productMetaData=[x.split(',') for x in metaFile.readlines()]
	

@app.route('/')
def hello_world():
	return render_template('index.html')

@app.route('/getProductDetails', methods=["GET","POST"])
def get_product_details():
	# We will get the current Product
	curProduct=request.args.get('productName')
	# We will now get the metadata for this product
	resultList=[x for x in productMetaData if x[0]==curProduct]
	if(len(resultList) ==0):
		return('')
	else:
		return(json.dumps(resultList))
	
	
	
if __name__ == '__main__':
  app.run(threaded=True)

