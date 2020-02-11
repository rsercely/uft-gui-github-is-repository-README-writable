' assumes you are logged in and on the
' github admpresales home page

nRepositoriesHeader = Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").Link("Repositories").GetROProperty ("innerText")
x = split(nRepositoriesHeader)
nRepositories = x(1)

Set aRepository = description.Create()
aRepository("xpath").value = "//a[@data-hovercard-type=""repository""]"

print "Repository Name,href,Access or not"
For repositoryIndex = 0 To nRepositories - 1
	aRepository("index").value = repositoryIndex
	Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").Link(aRepository).Highlight
	repositoryName = Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").Link(aRepository).GetROProperty("name")
	href = Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").Link(aRepository).GetROProperty("href")
	Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").Link(aRepository).Click
	if Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").InsightObject("Edit README pencil").Exist(5) then
		print repositoryName & "," & href &",have write access"
	else
		print repositoryName & "," & href& ",No write access"	
	End If 
	Browser("Micro Focus ADM Presales").back
next





Browser("Micro Focus ADM Presales").Page("Micro Focus ADM Presales").Link("script-usage-guide").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Micro Focus ADM Presales").Page("admpresales/script-usage-guide").WebElement("README.md").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Micro Focus ADM Presales").Page("admpresales/script-usage-guide").Sync
Browser("Micro Focus ADM Presales").Back @@ hightlight id_;_527386_;_script infofile_;_ZIP::ssf4.xml_;_

