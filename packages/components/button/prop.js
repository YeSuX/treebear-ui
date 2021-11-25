const typeValidator = (type) => {
    return ["primary", "secondary", "tertiary", "warning", "danger"].includes(
        type
    );
};
const themeValidator = (theme) => {
    return ["light", "solid", "borderless"].includes(theme);
};

const sizeValidator = (size) => {
    return ["large", "default", "small"].includes(size);
};

const htmlTypeValidator = (htmlType) => {
    return ["button", "reset", "submit"].includes(htmlType);
};

export const props = {
    type: {
        type: String,
        default: "primary",
        validator: typeValidator,
    },
    theme: {
        type: String,
        default: "light",
        validator: themeValidator,
    },
    size: {
        type: String,
        default: "default",
        validator: sizeValidator,
    },
    block: {
        type: Boolean,
    },
    disabled: {
        type: Boolean,
    },
    loading: {
        type: Boolean,
    },
    htmlType: {
        type: String,
        default: "button",
        validator: htmlTypeValidator,
    },
    icon: {
        type: String
    }
};