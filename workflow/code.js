async function main({ params }: Args): Promise<Output> {
    const ret = {
        "key1":  [
            {
              "card": ["4", "玄武"],
              "description": "![A Black Tortoise in the style of Ukiyo-e combined with wave spectrum art: a massive Black Tortoise with a shell as hard as rock, resting contently by the celestial waters, symbolizing stability and defense. The face has a laser material texture, abstract without a body, directed forward to emphasize the eyes' mystery and intimidation with a strong color contrast, and a grand aura. The background is mysterious.]"
            },
            {
              "card": ["1", "龙"],
              "description": "![Ukiyo-e style fused with wave spectrum art, depicting the abstract face of a dragon: an elegant visage with scales radiating divine light, symbolizing wisdom and agility. The skin has a ceramic texture. The design is abstract, focusing on the face without the body, facing forward with a strong emphasis on the mysterious and intimidating eyes. The color contrast is intense to convey a grandiose aura, set against a complex and mysterious background.]"
            },
            {
              "card": ["3", "朱雀"],
              "description": "![A Vermilion Bird in the style of Ukiyo-e combined with wave spectrum art. The bird is made of flames, symbolizing passion and adventure. The skin texture is rough, abstract without a body. The face is directed forward, emphasizing the eyes' mystery and intimidation with a strong color contrast, and a grand aura. The background has a strong impact.]"
            },
            {
              "card": ["2", "虎"],
              "description": "![Ukiyo-e style with wave spectrum art tiger: A robust white giant tiger, with a majestic stature and piercing eyes, standing among towering mountains, symbolizing strength and courage. The skin has a metallic texture, and the design is abstract without the body, just the face directed forward, emphasizing the eyes' mystery and intimidation with a strong color contrast, conveying a grand aura. The background is complex and mysterious.]"
            }
          ] ,
        
    };

    return ret;
}


//code2
async function main({ params }: any): Promise<any> {
    // 使用正则表达式匹配URL
    const urlPattern = /\(http[^\)]+\)/g;
    const matches = params.input.match(urlPattern);

    // 提取URL
    const urls = matches ? matches.map((url) => url.slice(1, -1)) : [];

    const ret = {
        "key0":  urls
        
    };

    return ret;
}

