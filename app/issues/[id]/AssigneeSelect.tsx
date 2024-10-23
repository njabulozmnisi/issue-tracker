'use client'

import { Select } from '@radix-ui/themes';

const AssigneeSelect = () => {
    return (
        <Select.Root>
            <Select.Trigger placeholder="Assign..."/>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestions</Select.Label>
                    <Select.Item value="Peter">Peter</Select.Item>
                    <Select.Item value="Jon">Jon</Select.Item>
                    <Select.Item value="Kevin" disabled>
                        Kevin
                    </Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>

    );
};

export default AssigneeSelect;