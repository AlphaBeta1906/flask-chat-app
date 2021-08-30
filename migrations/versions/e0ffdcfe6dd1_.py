"""empty message

Revision ID: e0ffdcfe6dd1
Revises: 30ac9512f6d0
Create Date: 2021-08-29 16:55:20.030403

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e0ffdcfe6dd1'
down_revision = '30ac9512f6d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('message',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=24), nullable=False),
    sa.Column('message', sa.String(length=2000), nullable=False),
    sa.Column('date', sa.String(length=2000), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('message')
    # ### end Alembic commands ###
