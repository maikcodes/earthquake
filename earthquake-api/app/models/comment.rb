class Comment < ApplicationRecord
    # validations
    validates :body, presence: true
    validates :feature_id, presence: true

    # associations
    belongs_to :feature

    def as_json(options = {})
        {
            id: id,
            body: body,
            feature_id: feature_id,
            created_at: created_at,
            updated_at: updated_at
        }
    end
end
