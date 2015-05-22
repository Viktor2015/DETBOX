function findwheels()
{
	var wheelbrand = jQuery('#wheel_brand').val();
	var width = jQuery('#wheel_width option:selected').text();
	var diam = jQuery('#wheel_diam option:selected').text();
	var studnum = jQuery('#stud_number option:selected').text();
	var studdiam = jQuery('#stud_diam option:selected').text();
	var wheelets = jQuery('#wheel_ets option:selected').text();
	var string = '(' + width + ',' + diam + ',' + studnum + ',' + studdiam + ',' + wheelets + ',' + wheelbrand + ')';
	var strurl = '/dtbx_searchform/partgroup/wheels' + string +'/1000/2000/';
	//alert(strurl);
	window.open(strurl ,'_self');
};