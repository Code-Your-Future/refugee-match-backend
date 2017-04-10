import xlrd
from collections import OrderedDict
import json
 
# Open the workbook and select the first worksheet
wb = xlrd.open_workbook('Refugee Match - Dataset v3 all values.xlsx')
sh = wb.sheet_by_index(0)
 
# List to hold dictionaries
dataSet_list = []
 
# Iterate through each row in worksheet and fetch values into dict
for rownum in range(1, sh.nrows):
    dataSet = OrderedDict()
    row_values = sh.row_values(rownum)
    dataSet['Local Authority'] = row_values[0]
    dataSet['Region'] = row_values[1]
    dataSet['Job opportunities'] = row_values[2]
    dataSet['Cost of living'] = row_values[3]
    dataSet['Quality of schools'] = row_values[4]
    dataSet['Level of crime'] = row_values[5]
    dataSet['English teaching'] = row_values[6]
    dataSet['Practical training'] = row_values[7]
    dataSet['University'] = row_values[8]
    dataSet['Mosque'] = row_values[9]
    dataSet['Church'] = row_values[10]
    dataSet['Synagogue'] = row_values[11]
    dataSet['Hindu Temple'] = row_values[12]
    dataSet['Sikh Temple'] = row_values[13]
    dataSet['Buddhist Temple'] = row_values[14]
    dataSet['Administration'] = row_values[15] 
    dataSet['Manufacturing'] = row_values[16]    
    dataSet['Education'] = row_values[17]    
    dataSet['Construction'] = row_values[18]    
    dataSet['Retail'] = row_values[19]    
    dataSet['Health and Social work'] = row_values[20]    
    dataSet['Electrcity, Gas and Water'] = row_values[21]    
    dataSet['Hotel and Restaurant'] = row_values[22]    
    dataSet['Agriculture'] = row_values[23]    
    dataSet['Business'] = row_values[24]
    dataSet['Countryside'] = row_values[25]    
    dataSet['Oldcity'] = row_values[26]    
    dataSet['Moderncity'] = row_values[27]    
    dataSet['Urban'] = row_values[28]    
    dataSet['Rural'] = row_values[29]    
    dataSet['Definition'] = row_values[30]    
    dataSet['ProfilePicture'] = row_values[31]    
    dataSet['Quote'] = row_values[32]    

    dataSet_list.append(dataSet)
 
# Serialize the list of dicts to JSON
j = json.dumps(dataSet_list)

 
# Write to file
with open('../data/data.json', 'w') as f:
    f.write(j)