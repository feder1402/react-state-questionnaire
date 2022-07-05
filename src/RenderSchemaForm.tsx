import React from 'react';
import { AutoForm } from 'uniforms-bootstrap5';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import schemaValidator from './schemaValidator';

const RenderSchemaForm = ({ schema, onSubmit }: {schema: any, onSubmit: (e: any) => void}) => {
    if (!schema?.properties || Object.keys(schema.properties).length === 0) {
        return null;
    }
    const bridge: JSONSchemaBridge = schemaValidator(schema);

    return (
        <div>
            <AutoForm schema={bridge} onSubmit={onSubmit}/>
        </div>
    )
}

export default RenderSchemaForm
