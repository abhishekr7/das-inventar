<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html>
		<head>
			<link rel = "stylesheet" type="text/css" href="/assets/Sitemap.css" />
		</head>
		<body>
			<h1>Site Map</h1>
			<hr />
			<table id = "sitemap">
				<tr>
					<th>Websites</th>
					<th>Essentials</th>
					<th>About</th>
				</tr>
				<!--xml link from here-->
				<xsl:for-each select="sitemap/row1">
					<tr>
						<td><a class="link" href="mainpage.html"><xsl:value-of select="home"/></a></td>
						<td><a class="link" href="Order.html"><xsl:value-of select="prof"/></a></td>
						<td><a class="link" href="mainpage.html"><xsl:value-of select="help"/></a></td>
					</tr>
				</xsl:for-each>
				<xsl:for-each select="sitemap/row2">
					<tr>
						<td><a class="link" href="Menu.html"><xsl:value-of select="menu"/></a></td>

					</tr>
				</xsl:for-each>
				<xsl:for-each select="sitemap/row3">
					<tr>
						<td><a class="link" href="Offers.html"><xsl:value-of select="offer"/></a></td>
					</tr>
				</xsl:for-each>
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>
