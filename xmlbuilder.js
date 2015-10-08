/* XML Builder by João Alves */
var XmlBuilder = (function() {
	var XmlBuilder = function() {
		var self = this;

		this.xmlDoc;
		this.activeNode = null;
		this.xmlProlog = "";
	}

	/* private helper functions */

	var switchNode = function (builder, newNode) {
		if(builder.activeNode != null) {
			builder.activeNode.appendChild(newNode);
			newNode.parentNode = builder.activeNode;
		}

		builder.activeNode = newNode;

		return newNode;
	}

	/* class functions */

	XmlBuilder.prototype.create = function(rootName, attributes, prolog) {
		if(typeof prolog === "undefined")
			this.xmlProlog = "";
		else
			this.xmlProlog = prolog;

		this.xmlDoc = document.implementation.createDocument("", rootName, null);

		if(typeof attributes !== "undefined")
            for(var key in attributes)
               this.xmlDoc.documentElement.setAttribute(key, attributes[key]);

		return this;
	}

	/* add a xml element */
	XmlBuilder.prototype.elem = function(elemName, content, attributes) {
		var node = this.xmlDoc.createElement(elemName);

		if(this.activeNode == null)
			this.xmlDoc.documentElement.appendChild(node);

		node = switchNode(this, node);

		if(typeof content !== "undefined")
			node.textContent = content;

		// this can be used to add namespaces to the attributes:
		//node.setAttributeNS("teset", "a", "b");

		if(typeof attributes !== "undefined")
			for(var key in attributes)
				node.setAttribute(key, attributes[key]);

		return this;
	}

	/* mainly resets parenting logic */
	XmlBuilder.prototype.flush = function() {
		if(this.activeNode != null) {
			this.activeNode = null; // clear
		}

		return this;
	}

	/* sets the current node as the current node parent (if available) */
	XmlBuilder.prototype.parent = function() {
		if(this.activeNode != null && typeof this.activeNode.parentNode !== "undefined")
			this.activeNode = this.activeNode.parentNode;

		return this;
	}

	XmlBuilder.prototype.toString = function() {
		var serializer = new XMLSerializer();
		return this.xmlProlog + serializer.serializeToString(this.xmlDoc);
	}

	return XmlBuilder;
})();