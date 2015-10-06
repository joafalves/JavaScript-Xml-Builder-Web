# JavaScript-Xml-Builder
Simple Javascript Class Builder for the web!

# How to use:
- Import the xmlbuilder.js file in your HTML page.
- It's ready!

# Example:
```javascript

var builder = new XmlBuilder();

var xmlStr = builder.create("master")
				.elem("slave", "", {"attrib": "myValue"})
					.elem("inner", "myValueA")
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
<master>
    <slave attrib="myValue">
        <inner>myValueA</inner>
        <inner>myValueB</inner>
        <inner>myValueC</inner>
    </slave>
    <slave attrib="myValue"/>
</master>
```
