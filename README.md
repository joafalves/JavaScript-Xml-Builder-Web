# JavaScript-Xml-Builder-Web
Simple Javascript Class Builder for the web!

# How to use:
- Import the xmlbuilder.js file in your HTML page.
- It's ready!

# Example:
```javascript

var builder = new XmlBuilder();

var xmlStr = builder.create("master", {"xmlns": "bx:mpa", "xmlns:url": "url"}])
				.elem("slave", "", {"attrib": "myValue"})
					.elem("url:inner", "myValueA")
					.parent().elem("inner", "myValueB")
					.parent().elem("inner", "myValueC")
					.flush()
				.elem("slave", "", {"attrib": "myValue"})
				.flush()
				.toString();

console.log(xmlStr);

```

Will generate:

```xml
<master xmlns="bx:mpa" xmlns:url="url">
    <slave attrib="myValue">
        <url:inner>myValueA</url:inner>
        <inner>myValueB</inner>
        <inner>myValueC</inner>
    </slave>
    <slave attrib="myValue"/>
</master>
```
