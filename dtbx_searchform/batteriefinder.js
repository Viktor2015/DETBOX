function findbatteries(params)
{
	var res = params.split("_");
	var string = '(';
	for(var i = 0; i < res.length; i++)
	{
		if(i !== 0) string += ';';
		string += (res[i] + ',' + jQuery('#prop_' + res[i]).val());
	}
	string += ')';
	var strurl = '/dtbx_searchform/partgroup/batteries' + string +'/1000/2000/';
	window.open(strurl ,'_self');
};