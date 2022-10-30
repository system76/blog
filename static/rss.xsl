<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <link rel="stylesheet" type="text/css" href="/rss.css" />
  <body style="margin-bottom:3em;">
    <xsl:for-each select="rss/channel">
      <div style="background-color:var(--color-blue);color:white;padding:8px;margin:1em,0,1em">
        <h1 style="margin-bottom:0px;font-size:200%">
          <xsl:value-of select="title"/>
        </h1>
        <span style="font-size:120%;margin-left:12px">last updated: <xsl:value-of select="lastBuildDate"/>
        </span>
      </div>
      <xsl:for-each select="item">
        <a href="{link}" target="_blank" style="color:var(--color-warm-gray);text-decoration:none;margin:1em,0,1em,0">
          <div style="background-color:#DDDDDD">
            <h2 style="margin-bottom:0px;margin-left:8px;">
              <xsl:value-of select="title"/>
            </h2>
            <span style="font-style:italic;color:var(--color-warm-gray);margin-left:12px">
              <xsl:value-of select="pubDate"/>
            </span>
          </div>
          <div style="margin-left:10px;margin-bottom:1em;font-size:10pt;display:flex;align-items:flex-start">
            <img src="{enclosure/@url}?auto=compress,format" width="200" style="padding-top:8px;object-fit:scale-down;"></img>
            <p style="margin-left:8px">
              <xsl:value-of select="description"/>
              <br/>
              <a href="{link}" target="_blank">
                <xsl:value-of select="link"/>
              </a>
            </p>
          </div>
        </a>
      </xsl:for-each>
    </xsl:for-each>
  </body>
</html> 