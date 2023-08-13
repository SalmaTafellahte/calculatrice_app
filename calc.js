 
//================================== Var definitions. ======================================
 
var nb1 = 0, nb2 = 0;
 
var op = 'null';
var cpt = 0;
//============================== Add numbers on 'screen'.===================================
function ajouteChiffre(form,val)
{
	form.texte.value += val;
}
//============== Test if a comma has already been appended or not. =========================
function ajoutePoint(form)
{
	if (form.texte.value.length == 0)
	{
		form.texte.value = "0.";
	}
	else 
	{
		var j = 0;
		for (var i=0;i<form.texte.value.length;i++)
		{
			if (form.texte.value.charAt(i) == ".")
			{
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : (alert("Déjà entré."));
	} 
}
//============================== Set operation type. ========================================
function setOp(opType)
{
	if (op == 'null')
	{
		op = opType;
	}
	else
	{
		alert("Vous étes déjà en train de faire une " + op + ".");
		form.texte.value = "";
	}
}
//===================================== Reset. ===============================================
function raz(form)
{
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}
//=============================== Store variables. ===========================================
function store(form)
{
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0))  
	{
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1))
	{
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
}
 
function storeEq(form)
{
	if (cpt == 1)
	{
		store(form);
	}
}
//================================== Calculate. ===============================================
function calc(form)
{
	 
	if (cpt < 2)  
	{
		alert("Il faut deux nombres pour pouvoir faire un calcul.");
	}
	else
	{
		if (op == "somme")
		{
			form.affichage.value = parseInt(nb1) + parseInt(nb2);
		}
		else if (op == "soustraction")
		{
			form.affichage.value = parseInt(nb1) - parseInt(nb2);
		}
		else if (op == "multiplication")
		{
			form.affichage.value = nb1 * nb2;
		}
		else if (op == "division")
		{
			if (nb2 == 0)
			{
				alert("On ne peut pas diviser par zéro.");
			}
			else
			{
				form.affichage.value = nb1 / nb2;
			}
		}
	}
}