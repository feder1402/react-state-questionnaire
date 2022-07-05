import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const ajv = new Ajv({ allErrors: true, useDefaults: true, strictSchema: "log" });

function createValidator(schema: object) {
    const validator = ajv.compile(schema);

    return (model: object) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
}

const schemaValidator = (schema: object): JSONSchemaBridge => {
    const validator = createValidator(schema);
    return new JSONSchemaBridge(schema, validator);
}

export default schemaValidator;
